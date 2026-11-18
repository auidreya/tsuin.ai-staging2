-- public.testimonials
--
-- Backing table for the tote bag pop-up and the live testimonial billboard on
-- the home page. Written and read by app/api/testimonials/route.ts with the
-- service_role key; the browser never touches Supabase directly.
--
-- Private: email and the five q*_ survey answers (Mom Test questions).
-- Public:  name + testimonial (the optional "wall line"), on the billboard.
--
-- One row per email: that's what stops one visitor claiming five totes.
-- To take a line off the billboard, set hidden = true in the dashboard.
-- Idempotent: safe to run more than once.

create extension if not exists pgcrypto;

create table if not exists public.testimonials (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text        not null,
  email       text        not null,
  testimonial text,
  source      text        not null default 'home-popup',
  hidden      boolean     not null default false
);

-- Survey answers (added after launch) -------------------------------------
-- Nullable in the database so rows claimed before the survey existed stay
-- valid; the API requires all five on every new claim.

alter table public.testimonials add column if not exists q1_lost_knowhow   text;
alter table public.testimonials add column if not exists q2_where_it_lives text;
alter table public.testimonials add column if not exists q3_ai_reexplain   text;
alter table public.testimonials add column if not exists q4_tried          text;
alter table public.testimonials add column if not exists q5_magic_wand     text;

-- The wall line became optional with the survey.
alter table public.testimonials alter column testimonial drop not null;

comment on table  public.testimonials                   is 'Tote bag pop-up claims. Email and q*_ answers are private; name + testimonial show on the home page billboard.';
comment on column public.testimonials.testimonial       is 'Optional public wall line. Null = not shown on the billboard.';
comment on column public.testimonials.hidden            is 'Set true to remove this row from the public billboard.';
comment on column public.testimonials.email             is 'Private. Never shown on the website.';
comment on column public.testimonials.q1_lost_knowhow   is 'Q1: When did know-how last get lost? What happened?';
comment on column public.testimonials.q2_where_it_lives is 'Q2: Where does how you work live today?';
comment on column public.testimonials.q3_ai_reexplain   is 'Q3: Last time you used AI for real work, what did you have to explain again or fix?';
comment on column public.testimonials.q4_tried          is 'Q4: What have you tried to fix this? How did it go?';
comment on column public.testimonials.q5_magic_wand     is 'Q5: Magic wand: what one thing would you change?';

create unique index if not exists testimonials_email_key on public.testimonials (email);
create index if not exists testimonials_visible_created_idx on public.testimonials (created_at desc) where not hidden;

-- Length caps, mirroring the API's own limits.
alter table public.testimonials drop constraint if exists testimonials_name_len;
alter table public.testimonials drop constraint if exists testimonials_email_len;
alter table public.testimonials drop constraint if exists testimonials_testimonial_len;
alter table public.testimonials drop constraint if exists testimonials_answers_len;

alter table public.testimonials add constraint testimonials_name_len        check (char_length(name) between 1 and 80);
alter table public.testimonials add constraint testimonials_email_len       check (char_length(email) between 3 and 254);
alter table public.testimonials add constraint testimonials_testimonial_len check (testimonial is null or char_length(testimonial) between 1 and 600);
alter table public.testimonials add constraint testimonials_answers_len     check (
  coalesce(char_length(q1_lost_knowhow), 0)   <= 1000 and
  coalesce(char_length(q2_where_it_lives), 0) <= 1000 and
  coalesce(char_length(q3_ai_reexplain), 0)   <= 1000 and
  coalesce(char_length(q4_tried), 0)          <= 1000 and
  coalesce(char_length(q5_magic_wand), 0)     <= 1000
);

-- RLS on with no policies: the anon key gets nothing. The API uses
-- service_role, which bypasses RLS.
alter table public.testimonials enable row level security;
revoke all on public.testimonials from anon, authenticated;
