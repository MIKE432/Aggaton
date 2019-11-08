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
    id SERIAL PRIMARY KEY NOT NULL,
    averse BYTEA,
    reverse BYTEA,
    name TEXT,
    symbol TEXT,
    year DATE,
    price INTEGER,
    estimated_amount INTEGER,
    weight NUMERIC,
    diameter NUMERIC,
    rim INTEGER,
    alloy INTEGER,
    shape INTEGER,
    stamp TEXT,
    nominal INTEGER,
    currency TEXT,
    country TEXT,
    mint TEXT,
    grading INTEGER,
    coin_depth INTEGER,
    created_by INTEGER NOT NULL
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

CREATE TABLE public.alloy (
    id SERIAL PRIMARY KEY NOT NULL,
    short_name TEXT,
    full_name TEXT
);

CREATE TABLE public.coin_depth (
    id SERIAL PRIMARY KEY NOT NULL,
    type TEXT,
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

INSERT INTO public.coin_depth (id, name) VALUES (1, 'głębokie');
INSERT INTO public.coin_depth (id, name) VALUES (2, 'płytkie');

INSERT INTO public.alloy (id, short_name, full_name) VALUES (1, 'Ag', 'Srebro');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (2, 'Al', 'Aluminium');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (3, 'Au', 'Złoto');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (4, 'B', 'Brąz');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (5, 'Cu', 'Miedz');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (6, 'Fe', 'Żelazo');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (7, 'GN', 'Golden Nordic');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (8, 'M', 'Mosiądz');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (9, 'Mg', 'Magnez');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (10, 'M-Mn', 'Mosiądz manganowy');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (11, 'MN', 'Miedzionikiel');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (12, 'Ni', 'Nikiel');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (13, 'Ns', 'Alpaka');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (14, 'Pb', 'Ołów');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (15, 'Pt', 'Platyna');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (16, 'S', 'Stal');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (17, 'Sn', 'Cyna');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (18, 'T', 'Tombak');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (19, 'Zn', 'Cynk');
INSERT INTO public.alloy (id, short_name, full_name) VALUES (20, 'ŻN', 'Żelazonikiel');

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_rim_rim_id FOREIGN KEY (rim) REFERENCES public.rim(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_price_price_id FOREIGN KEY (price) REFERENCES public.price(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT artifact_coin_shape_shape_id FOREIGN KEY (shape) REFERENCES public.shape(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT created_by_id FOREIGN KEY (created_by) REFERENCES public.userd(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT coin_depth_id FOREIGN KEY (coin_depth) REFERENCES public.coin_depth(id);

ALTER TABLE ONLY public.artifact_coin
    ADD CONSTRAINT alloy_id FOREIGN KEY (alloy) REFERENCES public.alloy(id);