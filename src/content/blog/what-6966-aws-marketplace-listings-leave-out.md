---
title: "What 6,966 AWS Marketplace listings leave out"
description: "We read every live SaaS listing in AWS Marketplace, at most two per seller. Eight in ten name no AWS service. Three in four have no security term at all."
date: 2026-10-02
tag: Data
readMinutes: 6
---

A buyer lands on your AWS Marketplace listing from a search, a colleague or an AI assistant. They have a handful of questions, and they leave when the page cannot answer them. We wanted to know how often that happens, so we counted.

<span class="epistemic ep-fact">Fact</span> We read every live SaaS listing in AWS Marketplace through the public Discovery API (snapshot 29 September 2026), kept at most two per seller so large sellers do not skew the picture, and ended up with **6,966 listings**. For each one we checked whether specific, observable things appear on the page.

## The counts

| What we looked for | Share of listings missing it |
|---|---|
| A pricing unit other than “Unit(s)” | **77%** price only in “Units” |
| Any AWS service named in the text | **80%** name none |
| Any security or compliance term | **74%** have none |
| Any deployment or setup language | **69%** have none |
| At least one customer review | **89%** have none |
| A video | **95%** have none |
| A “request private offer” button | **83%** have none |
| Every pricing dimension described | **27%** have at least one that is blank, repeats its name, or is a few characters |
| MCP support declared | **97%** do not declare it |

These are counts of fields and words, not judgements about any product. A good product can have a bad listing, and the reverse.

## What each gap costs, in plain terms

<span class="epistemic ep-opinion">Opinion</span> The reasoning below is ours. The counts above are measured; what they cost a given seller is not.

- **No AWS service named.** An engineer evaluating the product wants to know it fits their stack. “Integrates with your cloud” tells them nothing. A listing that says “reads from Amazon S3 and writes to Amazon Redshift” answers the question in nine words.
- **No security term.** A security reviewer opens a spreadsheet of questions before anything gets approved. If the listing does not say where data is stored or which report you can share, the reviewer emails you. Every email adds days.
- **“Units” as the only price.** Procurement cannot compare what they cannot count. We wrote more about this in [what a pricing unit should say](/blog/what-does-one-unit-mean/).
- **No setup language.** The path from “Subscribe” to a first working result is the part of the page a technical buyer reads closest. When it is absent, they assume it is long.

## What these numbers cannot tell you

<span class="epistemic ep-infer">Inference</span> Keyword checks produce false negatives. A listing can describe its security posture in words our checker does not match, and we have not measured how often that happens. Treat each percentage as “missing, as far as a word-and-field check can tell”, not as exact.

The checks also say nothing about whether what is written is true. That is a different job, and it is why the hand audit exists: it quotes the listing's own text as evidence for every score.

## Five things you can check on your own listing in ten minutes

1. Read the pricing dimensions. For each one, could a buyer say what one unit is without asking you?
2. Search your listing text for the name of every AWS service you actually use. If the count is zero, add them.
3. Search for “SOC”, “ISO”, “encrypt”, “region”. If none appear, security reviewers have nothing to start from.
4. Find the sentence that says what happens after Subscribe. If there is none, write one with a time in it, only if it is true.
5. Read the first twenty words of the short description. Do they say what it does and for whom?

If you would rather have a score and a ranked fix list, [the free audit](/audit/) does these checks in your browser, and nothing you paste is sent anywhere.

*Source: AWS Marketplace Discovery API, read-only, public data, snapshot 29 September 2026. Aggregates only; no single listing's score is published.*
