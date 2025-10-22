import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get("/items", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("items").select("*").order("id", { ascending: true });

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("items").select("*").eq("id", id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

app.post("/items", async (req, res) => {
  const { nama_pelanggan, jenis_sepatu, status, tanggal_selesai } = req.body;
  const { data, error } = await supabase
    .from("items")
    .insert([{ nama_pelanggan, jenis_sepatu, status, tanggal_selesai }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
});

app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { nama_pelanggan, jenis_sepatu, status, tanggal_selesai } = req.body;
  const { data, error } = await supabase
    .from("items")
    .update({ nama_pelanggan, jenis_sepatu, status, tanggal_selesai })
    .eq("id", id)
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data[0]);
});


app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("items").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Item berhasil dihapus" });
});

app.get("/", (req, res) => {
  res.send("API Laundry Sepatu v1.0 siap digunakan 👟");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));