CREATE DATABASE bd_restaurant
    WITH
    OWNER = soporte
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Venezuela.1252'
    LC_CTYPE = 'Spanish_Venezuela.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

    CREATE TABLE IF NOT EXISTS public.tb_category
(
    id_category integer NOT NULL,
    name_category character(30) COLLATE pg_catalog."default",
    CONSTRAINT tb_category_pkey PRIMARY KEY (id_category)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tb_category
    OWNER to soporte;

    CREATE TABLE IF NOT EXISTS public.tb_product
(
    id_pd integer NOT NULL,
    plate_pd character(30) COLLATE pg_catalog."default",
    price_pd integer,
    img_pd character(100) COLLATE pg_catalog."default",
    stock_pd integer,
    id_category integer,
    CONSTRAINT tb_product_pkey PRIMARY KEY (id_pd),
    CONSTRAINT "CF_01" FOREIGN KEY (id_category)
        REFERENCES public.tb_category (id_category) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tb_product
    OWNER to soporte;
