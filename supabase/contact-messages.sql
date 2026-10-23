-- public.contact_messages
--
-- Backing table for the /contact form, written by app/api/contact/route.ts
-- with the service_role key. Idempotent: safe to run more than once.

create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id         uuid        primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name       text        not null,
  email      text        not null,
  message    text        not null,
  source     text        not null default 'contact'
);

comment on table  public.contact_messages         is 'Messages sent through the /contact form.';
comment on column public.contact_messages.message is 'Free text: what the sender wants to talk about.';

do $$
begin
  alter table public.contact_messages add constraint contact_messages_email_len   check (char_length(email) between 3 and 254);
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table public.contact_messages add constraint contact_messages_name_len    check (char_length(name) between 1 and 120);
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table public.contact_messages add constraint contact_messages_message_len check (char_length(message) between 1 and 4000);
exception when duplicate_object then null;
end $$;

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

-- RLS on with no policies: the anon key gets nothing. The API writes with
-- service_role, which bypasses RLS. Read messages in the Supabase dashboard.
alter table public.contact_messages enable row level security;
revoke all on public.contact_messages from anon, authenticated;
