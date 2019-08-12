CREATE TABLE public.expert (
    id SERIAL PRIMARY KEY NOT NULL
);

CREATE TABLE public.artifact (
    id SERIAL PRIMARY KEY NOT NULL,
    type TEXT,
    name TEXT,
    info TEXT,
    created_by INTEGER,
    created_date DATE,
    modified_by INTEGER,
    modified_data DATE
);

CREATE TABLE public.artifact_coin (
    id SERIAL PRIMARY KEY NOT NULL,
    averse TEXT,
    reverse TEXT
);


ALTER TABLE ONLY public.artifact ADD CONSTRAINT created_by_id_fkey FOREIGN KEY (created_by) REFERENCES public.expert(id);
ALTER TABLE ONLY public.artifact ADD CONSTRAINT modified_by_id_fkey FOREIGN KEY (modified_by) REFERENCES public.expert(id);
