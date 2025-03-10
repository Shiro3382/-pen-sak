import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import './App.css';

export default function ApenSak() {
  const [saker, setSaker] = useState([]);
  const [search, setSearch] = useState("");
  const [newSak, setNewSak] = useState({ bilnummer: "", feil: "", saknummer: "" });

  const handleAddSak = () => {
    if (newSak.bilnummer && newSak.feil && newSak.saknummer) {
      setSaker([...saker, newSak]);
      setNewSak({ bilnummer: "", feil: "", saknummer: "" });
    }
  };

  const filteredSaker = saker.filter(
    (sak) =>
      sak.bilnummer.includes(search) || sak.saknummer.includes(search)
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Åpen Sak - Bilverksted</h1>
      <div className="mb-4">
        <Input
          className="search-bar"
          placeholder="Søk etter bilnummer eller saknummer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-4 vertical-stack">
        <Input
          placeholder="Bilnummer"
          value={newSak.bilnummer}
          onChange={(e) => setNewSak({ ...newSak, bilnummer: e.target.value })}
        />
        <Input
          placeholder="Feilbeskrivelse"
          value={newSak.feil}
          onChange={(e) => setNewSak({ ...newSak, feil: e.target.value })}
        />
        <Input
          placeholder="Saknummer"
          value={newSak.saknummer}
          onChange={(e) => setNewSak({ ...newSak, saknummer: e.target.value })}
        />
        <Button onClick={handleAddSak}>Legg til sak</Button>
      </div>
      <div className="cards-grid">
        {filteredSaker.map((sak, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p><strong>Bilnummer:</strong> {sak.bilnummer}</p>
              <p><strong>Feil:</strong> {sak.feil}</p>
              <p><strong>Saknummer:</strong> {sak.saknummer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
