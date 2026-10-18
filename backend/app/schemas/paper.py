from pydantic import BaseModel, ConfigDict, Field


class PaperCreate(BaseModel):
    title: str = Field(min_length=1, max_length=500)
    abstract: str | None = None
    year: int | None = Field(default=None, ge=0)
    venue: str | None = Field(default=None, max_length=255)
    doi: str | None = Field(default=None, max_length=255)
    arxiv_id: str | None = Field(default=None, max_length=100)


class PaperResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    abstract: str | None = None
    year: int | None = None
    venue: str | None = None
    doi: str | None = None
    arxiv_id: str | None = None
