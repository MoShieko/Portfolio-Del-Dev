import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { CONTACT_EMAIL } from "../constants";
import type { Translation } from "../i18n";
import { styles } from "../styles";

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

type ContactProps = {
  t: Translation;
};

export function Contact({ t }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const updateField =
    (field: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.details,
          subject: t.contact.subject,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setForm({
        name: "",
        email: "",
        details: "",
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="page-section" style={styles.section}>
      <div className="contact-box" style={styles.contactBox}>
        <div style={styles.contactLeft}>
          <h2 style={styles.contactTitle}>
            {t.contact.title}{" "}
            <span style={styles.heroAccent}>{t.contact.accent}</span>
          </h2>
          <p style={styles.contactSub}>
            {t.contact.sub}
          </p>
          <div style={styles.contactMeta}>
            <span style={styles.contactLink}>
              @ {CONTACT_EMAIL}
            </span>
            <span>'s-Hertogenbosch / Netherlands</span>
          </div>
        </div>
        <form onSubmit={submitContact} style={styles.contactRight}>
          <input
            onChange={updateField("name")}
            placeholder={t.contact.name}
            required
            style={styles.contactInput}
            value={form.name}
          />
          <input
            onChange={updateField("email")}
            placeholder={t.contact.email}
            required
            style={styles.contactInput}
            type="email"
            value={form.email}
          />
          <textarea
            onChange={updateField("details")}
            placeholder={t.contact.details}
            required
            style={{ ...styles.contactInput, ...styles.contactTextarea }}
            value={form.details}
          />
          <button
            disabled={status === "sending"}
            style={styles.initBtn}
            type="submit"
          >
            {status === "sending" ? t.contact.sending : t.contact.send}
          </button>
          {status === "sent" ? (
            <span style={styles.formStatus}>{t.contact.sent}</span>
          ) : null}
          {status === "error" ? (
            <span style={{ ...styles.formStatus, ...styles.formStatusError }}>
              {t.contact.error}
            </span>
          ) : null}
        </form>
      </div>
    </section>
  );
}
