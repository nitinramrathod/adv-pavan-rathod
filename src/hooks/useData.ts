"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export function useCases(params?: Record<string, string>) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = params ? "?" + new URLSearchParams(params).toString() : "";
    axios.get(`/api/cases${query}`)
      .then(r => setData(r.data))
      .catch(() => setError("Failed to load cases"))
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { data, loading, error };
}

export function useTestimonials() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/testimonials")
      .then(r => setData(r.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

export function useReviews() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/reviews")
      .then(r => setData(r.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
