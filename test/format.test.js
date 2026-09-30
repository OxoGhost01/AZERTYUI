import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
    assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 1 }), 'A1 — Vis : 3 u');
    assert.equal(formaterLigne({ ref: 'B2', nom: 'Farine', quantite: 2, seuil: 1, unite: 'kg' }), 'B2 — Farine : 2 kg');
});
