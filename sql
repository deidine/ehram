create table
  public.users (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone not null default now(),
    nom text null,
    prenom text null,
    nni bigint null,
    phone bigint null,
    email text null,
    password text null,
    constraint users_pkey primary key (id),
    constraint users_phone_key unique (phone)
  ) tablespace pg_default;