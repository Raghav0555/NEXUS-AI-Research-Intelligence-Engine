from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from database.connection import Base


class Paper(Base):
    __tablename__ = "papers"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    title: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )

    abstract: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    year: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True,
    )

    venue: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    doi: Mapped[str | None] = mapped_column(
        String(255),
        unique=True,
        nullable=True,
    )

    arxiv_id: Mapped[str | None] = mapped_column(
        String(100),
        unique=True,
        nullable=True,
    )