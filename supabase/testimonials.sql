-- public.testimonials
--
-- Backing table for the tote bag pop-up and the live testimonial billboard on
-- the home page. Written and read by app/api/testimonials/route.ts with the
-- service_role key; the browser never touches Supabase directly, and the
-- email column is never sent to the page.
--
-- One row per email: that's what stops one visitor claiming five totes.
-- To take a testimonial off the billboard, set hidden = true in the dashboard.
-- Idempotent: safe to run more than once.

create extension if not exists pgcrypto;

create table if not exists public.testimonials (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text        not null,
  email       text        not null,
  testimonial text        not null,
  source      text        not null default 'home-popup',
  hidden      boolean     not null default false
);

comment on table  public.testimonials             is 'Tote bag pop-up: name, email and testimonial. Non-hidden rows show on the home page billboard.';
comment on column public.testimonials.testimonial is 'Free text: what they think of the Cognitive AI Twin / tsuin.ai, use case, comment or feedback.';
comment on column public.testimonials.hidden      is 'Set true to remove this testimonial from the public billboard.';
comment on column public.testimonials.email       is 'Private. Never shown on the website.';

create unique index if not exists testimonials_email_key on public.testimonials (email);
create index if not exists testimonials_visible_created_idx on public.testimonials (created_at desc) where not hidden;

do $$
begin
  alter table public.testimonials add constraint testimonials_name_len        check (char_length(name) between 1 and 80);
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table public.testimonials add constraint testimonials_email_len       check (char_length(email) between 3 and 254);
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table public.testimonials add constraint testimonials_testimonial_len check (char_length(testimonial) between 1 and 600);
exception when duplicate_object then null;
end $$;

-- RLS on with no policies: the anon key gets nothing. The API uses
-- service_role, which bypasses RLS.
alter table public.testimonials enable row level security;
revoke all on public.testimonials from anon, authenticated;
