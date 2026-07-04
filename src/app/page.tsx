"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  Clock3,
  Download,
  FileCheck2,
  Handshake,
  LockKeyhole,
  MessageSquareText,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type DocumentItem = {
  id: string;
  label: string;
  detail: string;
};

type Lender = {
  name: string;
  product: string;
  baseline: number;
  maxAmount: number;
  minAmount: number;
  cost: string;
  speedDays: number;
  bestFor: string;
  tradeoff: string;
};

const money = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const documents: DocumentItem[] = [
  { id: "bank", label: "Bank statements", detail: "12 months connected" },
  { id: "tax", label: "Tax returns", detail: "2 years uploaded" },
  { id: "debt", label: "Debt schedule", detail: "Existing loans verified" },
  { id: "story", label: "Revenue note", detail: "Explains March dip" },
];

const lenders: Lender[] = [
  {
    name: "Mercury Community Bank",
    product: "Working capital line",
    baseline: 91,
    minAmount: 65000,
    maxAmount: 145000,
    cost: "8.4-10.1% APR",
    speedDays: 2,
    bestFor: "Lowest friction for a clean local business packet.",
    tradeoff: "Needs the revenue note before final approval.",
  },
  {
    name: "Northstar Growth Credit",
    product: "Revenue-based advance",
    baseline: 84,
    minAmount: 35000,
    maxAmount: 105000,
    cost: "1.08x repayment cap",
    speedDays: 1,
    bestFor: "Fast runway if the borrower needs money this week.",
    tradeoff: "More expensive than a bank line.",
  },
  {
    name: "Civic Bridge Fund",
    product: "SBA prep package",
    baseline: 79,
    minAmount: 110000,
    maxAmount: 260000,
    cost: "7.8-9.5% APR",
    speedDays: 9,
    bestFor: "Best total cost when timing is flexible.",
    tradeoff: "Slower underwriting and heavier documentation.",
  },
  {
    name: "Harbor Equipment Finance",
    product: "Equipment loan",
    baseline: 73,
    minAmount: 25000,
    maxAmount: 80000,
    cost: "9.2-11.6% APR",
    speedDays: 4,
    bestFor: "Useful if the ask shifts to a delivery van or oven.",
    tradeoff: "Weak fit for payroll and inventory cash.",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function Home() {
  const [amount, setAmount] = useState(85000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(68000);
  const [urgent, setUrgent] = useState(true);
  const [selectedDocs, setSelectedDocs] = useState<string[]>(["bank", "tax", "debt"]);
  const [selectedLenderName, setSelectedLenderName] = useState(lenders[0].name);
  const [packetGenerated, setPacketGenerated] = useState(false);

  const selectedDocCount = selectedDocs.length;
  const missingDocs = documents.filter((document) => !selectedDocs.includes(document.id));

  const readiness = clamp(
    Math.round(48 + selectedDocCount * 10 + monthlyRevenue / 3600 - amount / 12000),
    34,
    98,
  );

  const rankedLenders = useMemo(() => {
    return lenders
      .map((lender) => {
        const amountFit =
          amount >= lender.minAmount && amount <= lender.maxAmount
            ? 8
            : -Math.min(16, Math.round(Math.abs(amount - lender.maxAmount) / 10000));
        const speedFit = urgent ? Math.max(0, 10 - lender.speedDays) : lender.speedDays > 4 ? 6 : 2;
        const docPenalty = missingDocs.length * 3;
        const match = clamp(lender.baseline + amountFit + speedFit - docPenalty, 45, 99);

        return { ...lender, match };
      })
      .sort((a, b) => b.match - a.match);
  }, [amount, missingDocs.length, urgent]);

  const selectedLender =
    rankedLenders.find((lender) => lender.name === selectedLenderName) ?? rankedLenders[0];

  const nextAction =
    readiness >= 88
      ? "Packet is lender-ready. Send the intro and track lender replies."
      : `Add ${missingDocs[0]?.label.toLowerCase() ?? "the last document"} to unlock a cleaner submission.`;

  function toggleDocument(id: string) {
    setPacketGenerated(false);
    setSelectedDocs((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function updateAmount(value: number) {
    setPacketGenerated(false);
    setAmount(value);
  }

  function updateRevenue(value: number) {
    setPacketGenerated(false);
    setMonthlyRevenue(value);
  }

  return (
    <main className={styles.shell}>
      <section className={styles.hero} aria-labelledby="page-title">
        <div className={styles.brand}>
          <span className={styles.brandMark}>
            <Handshake size={22} aria-hidden="true" />
          </span>
          <div>
            <strong>Bridge Finance Network</strong>
            <span>Capital matching for small businesses</span>
          </div>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Hackathon demo workspace</span>
            <h1 id="page-title">Turn a borrower file into a lender-ready packet.</h1>
            <p>
              A simpler flow for the demo: tune the borrower request, confirm documents, compare
              lender fit, then generate the outreach packet.
            </p>
          </div>

          <div className={styles.scoreCard} aria-label="Current readiness">
            <span>Readiness</span>
            <strong>{readiness}%</strong>
            <p>{nextAction}</p>
          </div>
        </div>
      </section>

      <section className={styles.workflow} aria-label="Borrower workflow">
        <article className={styles.panel}>
          <div className={styles.panelTitle}>
            <span className={styles.step}>1</span>
            <div>
              <h2>Borrower request</h2>
              <p>Adjust the facts judges will care about during the walkthrough.</p>
            </div>
          </div>

          <div className={styles.borrowerHeader}>
            <div>
              <span>Borrower</span>
              <strong>Riverside Bakery Co.</strong>
            </div>
            <div>
              <span>Use of funds</span>
              <strong>Wholesale expansion + payroll runway</strong>
            </div>
          </div>

          <label className={styles.sliderBlock}>
            <span>Funding needed: {money.format(amount)}</span>
            <input
              aria-label="Funding needed"
              max="180000"
              min="25000"
              onChange={(event) => updateAmount(Number(event.target.value))}
              step="5000"
              type="range"
              value={amount}
            />
          </label>

          <label className={styles.sliderBlock}>
            <span>Monthly revenue: {money.format(monthlyRevenue)}</span>
            <input
              aria-label="Monthly revenue"
              max="110000"
              min="35000"
              onChange={(event) => updateRevenue(Number(event.target.value))}
              step="1000"
              type="range"
              value={monthlyRevenue}
            />
          </label>

          <button
            className={`${styles.toggleButton} ${urgent ? styles.toggleActive : ""}`}
            onClick={() => {
              setPacketGenerated(false);
              setUrgent((current) => !current);
            }}
            type="button"
          >
            <Clock3 size={18} aria-hidden="true" />
            {urgent ? "Funding needed this week" : "Timing is flexible"}
          </button>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelTitle}>
            <span className={styles.step}>2</span>
            <div>
              <h2>Packet checklist</h2>
              <p>Toggle documents to show how readiness changes in real time.</p>
            </div>
          </div>

          <div className={styles.documentList}>
            {documents.map((document) => {
              const ready = selectedDocs.includes(document.id);

              return (
                <button
                  aria-pressed={ready}
                  className={ready ? styles.documentReady : ""}
                  key={document.id}
                  onClick={() => toggleDocument(document.id)}
                  type="button"
                >
                  {ready ? <CheckCircle2 size={20} aria-hidden="true" /> : <Upload size={20} aria-hidden="true" />}
                  <span>
                    <strong>{document.label}</strong>
                    <small>{document.detail}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.securityNote}>
            <LockKeyhole size={18} aria-hidden="true" />
            <span>Banking, tax, and lender packet actions are shown as an audit-safe demo trail.</span>
          </div>
        </article>

        <article className={`${styles.panel} ${styles.lenderPanel}`}>
          <div className={styles.panelTitle}>
            <span className={styles.step}>3</span>
            <div>
              <h2>Lender match</h2>
              <p>Ranked by amount fit, speed, document readiness, and capital type.</p>
            </div>
          </div>

          <div className={styles.lenderList}>
            {rankedLenders.map((lender) => (
              <button
                className={selectedLender.name === lender.name ? styles.lenderActive : ""}
                key={lender.name}
                onClick={() => setSelectedLenderName(lender.name)}
                type="button"
              >
                <span>{lender.match}%</span>
                <div>
                  <strong>{lender.name}</strong>
                  <small>{lender.product}</small>
                </div>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.resultGrid} aria-label="Selected lender and packet">
        <article className={styles.offerCard}>
          <div className={styles.offerHeader}>
            <div>
              <span className={styles.kicker}>Selected lender</span>
              <h2>{selectedLender.name}</h2>
            </div>
            <div className={styles.matchPill}>
              <BadgeCheck size={18} aria-hidden="true" />
              {selectedLender.match}% fit
            </div>
          </div>

          <p className={styles.offerSummary}>{selectedLender.bestFor}</p>

          <div className={styles.metricGrid}>
            <div>
              <Banknote size={18} aria-hidden="true" />
              <span>Funding range</span>
              <strong>
                {money.format(selectedLender.minAmount)}-{money.format(selectedLender.maxAmount)}
              </strong>
            </div>
            <div>
              <SlidersHorizontal size={18} aria-hidden="true" />
              <span>Pricing</span>
              <strong>{selectedLender.cost}</strong>
            </div>
            <div>
              <Building2 size={18} aria-hidden="true" />
              <span>Decision speed</span>
              <strong>{selectedLender.speedDays === 1 ? "Same day" : `${selectedLender.speedDays} days`}</strong>
            </div>
          </div>

          <div className={styles.tradeoff}>
            <ShieldCheck size={18} aria-hidden="true" />
            <span>{selectedLender.tradeoff}</span>
          </div>
        </article>

        <article className={styles.packetCard}>
          <div className={styles.offerHeader}>
            <div>
              <span className={styles.kicker}>Demo packet</span>
              <h2>{packetGenerated ? "Ready to present" : "One click to generate"}</h2>
            </div>
            <FileCheck2 size={24} aria-hidden="true" />
          </div>

          <div className={styles.packetPreview}>
            <p>
              Riverside Bakery is requesting {money.format(amount)} after averaging{" "}
              {money.format(monthlyRevenue)} in monthly revenue. The best path is{" "}
              {selectedLender.product.toLowerCase()} through {selectedLender.name}.
            </p>
            <ul>
              <li>{readiness}% readiness score</li>
              <li>{selectedDocCount} of {documents.length} documents confirmed</li>
              <li>{urgent ? "Fast-funding path prioritized" : "Lower-cost options prioritized"}</li>
            </ul>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.primaryButton} onClick={() => setPacketGenerated(true)} type="button">
              <Sparkles size={18} aria-hidden="true" />
              Generate packet
            </button>
            <button className={styles.secondaryButton} type="button">
              <Download size={18} aria-hidden="true" />
              Export
            </button>
            <button className={styles.secondaryButton} type="button">
              <Send size={18} aria-hidden="true" />
              Send intro
            </button>
          </div>

          <div className={packetGenerated ? styles.generatedState : styles.pendingState}>
            <MessageSquareText size={18} aria-hidden="true" />
            <span>
              {packetGenerated
                ? "Packet summary, lender intro, and missing-item note are ready for the demo."
                : "Generate creates the story judges can follow in under 90 seconds."}
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}
