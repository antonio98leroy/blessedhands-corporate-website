from pathlib import Path
from decouple import config
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = config(
    "SECRET_KEY",
    default="django-insecure-change-this-before-production"
)

DEBUG = config("DEBUG", default=True, cast=bool)

ALLOWED_HOSTS = ["127.0.0.1", "localhost"".onrender.com",]

# -------------------------------------------------------------------
# Applications
# -------------------------------------------------------------------

INSTALLED_APPS = [
    # Django Apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Third Party
    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",

    # Local Apps
    "accounts",
    "website",
    "services",
    "projects",
    "equipment",
    "gallery",
    "news",
    "team",
    "careers",
    "contact",
    "quotes",
]

# -------------------------------------------------------------------
# Middleware
# -------------------------------------------------------------------

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
]

ROOT_URLCONF = "config.urls"

# -------------------------------------------------------------------
# Templates
# -------------------------------------------------------------------

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# -------------------------------------------------------------------
# Database
# -------------------------------------------------------------------

DATABASES = {
    "default": dj_database_url.config(
        default=(
            f"postgresql://{config('DB_USER', default='blessedhands_admin')}:"
            f"{config('DB_PASSWORD', default='')}@"
            f"{config('DB_HOST', default='localhost')}:"
            f"{config('DB_PORT', default='5432')}/"
            f"{config('DB_NAME', default='blessedhands_db')}"
        ),
        conn_max_age=600,
        ssl_require=not DEBUG,
    )
}

# -------------------------------------------------------------------
# Password Validation
# -------------------------------------------------------------------

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# -------------------------------------------------------------------
# Internationalization
# -------------------------------------------------------------------

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Africa/Monrovia"

USE_I18N = True

USE_TZ = True

# -------------------------------------------------------------------
# Static & Media
# -------------------------------------------------------------------

STATIC_URL = "static/"
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

STORAGES = {
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# -------------------------------------------------------------------
# Django REST Framework
# -------------------------------------------------------------------

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

# -------------------------------------------------------------------
# CORS
# -------------------------------------------------------------------

CCORS_ALLOWED_ORIGINS = [
    "https://antonio98leroy.github.io",
]
CSRF_TRUSTED_ORIGINS = [
    "https://*.onrender.com",
    "https://antonio98leroy.github.io",
]
# -------------------------------------------------------------------
# Default Primary Key
# -------------------------------------------------------------------

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
