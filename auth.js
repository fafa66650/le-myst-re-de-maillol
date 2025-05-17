
async function verifierCode(code) {
  const doc = await db.collection("groupes").doc(code).get();
  if (!doc.exists) {
    alert("❌ Code invalide !");
    return false;
  }
  const data = doc.data();
  const now = new Date();
  const validUntil = new Date(data.valide_jusqu);
  if (now > validUntil) {
    alert("⏳ Code expiré !");
    return false;
  }
  localStorage.setItem("groupe", code);
  return true;
}
