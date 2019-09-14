CREATE TABLE public.userd (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    salt TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
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
    price INTEGER,
    estimated_amount INTEGER,
    weight NUMERIC,
    diameter NUMERIC,
    rim INTEGER,
    alloy TEXT,
    shape INTEGER,
    stamp TEXT,
    nominal INTEGER,
    currency TEXT,
    country TEXT,
    mint TEXT,
    grading INTEGER
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
    is_concave BOOLEAN,
    name TEXT NOT NULL
);

INSERT INTO public.shape VALUES (1, 'kwadrat');
INSERT INTO public.shape VALUES (2, 'okrąg');
INSERT INTO public.shape VALUES (3, 'kwadrat');
INSERT INTO public.shape VALUES (4, 'wielokąt');

INSERT INTO public.rim (id, name) VALUES (1, 'gładki');
INSERT INTO public.rim (id, name) VALUES (2, 'karbowany skośnie');
INSERT INTO public.rim (id, name) VALUES (3, 'karbowany prostopadle');
INSERT INTO public.rim (id, name) VALUES (4, 'ornamentowa');
INSERT INTO public.rim (id, name) VALUES (5, 'napisowa');

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_rim_rim_id FOREIGN KEY (rim) REFERENCES public.rim(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_price_price_id FOREIGN KEY (price) REFERENCES public.price(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_shape_shape_id FOREIGN KEY (shape) REFERENCES public.shape(id);