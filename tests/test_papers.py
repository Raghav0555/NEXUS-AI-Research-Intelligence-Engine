
def test_create_paper(client):
    response = client.post(
        "/papers/",
        json={
            "title": "AI Research Paper",
            "abstract": "A test abstract",
            "year": 2025,
            "venue": "NEXUS Conference",
        },
    )

    assert response.status_code == 201
    data = response.json()
    assert data["id"] > 0
    assert data["title"] == "AI Research Paper"
    assert data["year"] == 2025


def test_create_paper_rejects_empty_title(client):
    response = client.post(
        "/papers/",
        json={"title": ""},
    )

    assert response.status_code == 422


def test_create_paper_rejects_negative_year(client):
    response = client.post(
        "/papers/",
        json={"title": "Invalid Year", "year": -1},
    )

    assert response.status_code == 422


def test_create_paper_rejects_duplicate_doi(client):
    paper = {
        "title": "First Paper",
        "doi": "10.1234/nexus-test",
    }

    first = client.post("/papers/", json=paper)
    second = client.post(
        "/papers/",
        json={
            "title": "Duplicate Paper",
            "doi": "10.1234/nexus-test",
        },
    )

    print("First response:", first.status_code, first.text)
    print("Second response:", second.status_code, second.text)

    assert first.status_code == 201
    assert second.status_code == 409
def test_list_papers(client):
    client.post("/papers/", json={"title": "Paper A"})
    client.post("/papers/", json={"title": "Paper B"})

    response = client.get("/papers/")

    assert response.status_code == 200
    assert [paper["title"] for paper in response.json()] == [
        "Paper A",
        "Paper B",
    ]


def test_list_papers_empty(client):
    response = client.get("/papers/")

    assert response.status_code == 200
    assert response.json() == []


def test_get_paper(client):
    created = client.post(
        "/papers/",
        json={"title": "Find Me"},
    ).json()

    response = client.get(f"/papers/{created['id']}")

    assert response.status_code == 200
    assert response.json()["title"] == "Find Me"


def test_get_missing_paper_returns_404(client):
    response = client.get("/papers/9999")

    assert response.status_code == 404


def test_delete_paper(client):
    created = client.post(
        "/papers/",
        json={"title": "Delete Me"},
    ).json()

    response = client.delete(f"/papers/{created['id']}")

    assert response.status_code == 204
    assert client.get(f"/papers/{created['id']}").status_code == 404


def test_delete_missing_paper_returns_404(client):
    response = client.delete("/papers/9999")

    assert response.status_code == 404

def test_update_paper(client):
    created = client.post(
        "/papers/",
        json={"title": "Original Title", "year": 2024},
    ).json()

    response = client.put(
        f"/papers/{created['id']}",
        json={"title": "Updated Title", "year": 2025},
    )

    assert response.status_code == 200
    assert response.json()["title"] == "Updated Title"
    assert response.json()["year"] == 2025


def test_update_missing_paper_returns_404(client):
    response = client.put(
        "/papers/9999",
        json={"title": "Missing Paper"},
    )

    assert response.status_code == 404


def test_update_paper_rejects_invalid_data(client):
    created = client.post(
        "/papers/",
        json={"title": "Valid Paper"},
    ).json()

    response = client.put(
        f"/papers/{created['id']}",
        json={"title": "", "year": -1},
    )

    assert response.status_code == 422


def test_update_paper_rejects_duplicate_doi(client):
    client.post(
        "/papers/",
        json={"title": "Existing Paper", "doi": "10.1234/existing"},
    )
    created = client.post(
        "/papers/",
        json={"title": "Paper To Update"},
    ).json()

    response = client.put(
        f"/papers/{created['id']}",
        json={"title": "Paper To Update", "doi": "10.1234/existing"},
    )

    assert response.status_code == 409