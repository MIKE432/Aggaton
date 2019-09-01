CREATE TABLE public.userd (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    salt TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    is_expert BOOLEAN NOT NULL
);

CREATE TABLE public.artifact (
    id SERIAL PRIMARY KEY NOT NULL,
    type TEXT NOT NULL,
    name TEXT NOT NULL,
    info TEXT,
    created_by INTEGER NOT NULL,
    created_date DATE NOT NULL,
    modified_by INTEGER NOT NULL,
    modified_data DATE NOT NULL,
    is_draft BOOLEAN
);

CREATE TABLE public.artifact_coin (
    id INTEGER PRIMARY KEY NOT NULL,
    averse BYTEA,
    reverse BYTEA,
    year DATE,
    price DOUBLE PRECISION,
    estimated_amount INTEGER,
    weight NUMERIC,
    diameter NUMERIC,
    rim INTEGER,
    alloy TEXT,
    shape INTEGER,
    stamp TEXT,
    nominal INTEGER,
    currency INTEGER,
    country INTEGER,
    mint INTEGER,
    grading INTEGER
);

CREATE TABLE public.country (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    abbr TEXT
);

CREATE TABLE public.mint (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    country INTEGER
);

CREATE TABLE public.currency (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE public.unit (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    currency_id INTEGER NOT NULL
);

CREATE TABLE public.shape (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE public.price (
    id SERIAL PRIMARY KEY NOT NULL,
    last_auction INTEGER,
    expert_price INTEGER,
    expert_id INTEGER
);

CREATE TABLE public.rim (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
);
