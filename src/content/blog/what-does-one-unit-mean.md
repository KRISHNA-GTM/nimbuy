---
title: "What does one “Unit” mean? Writing pricing dimensions procurement can read"
description: "Seventy-seven percent of AWS Marketplace SaaS listings price in “Units” and about a quarter have a pricing line with no real description. Here is how to fix yours."
date: 2026-10-02
tag: Pricing
readMinutes: 5
---

On an AWS Marketplace listing, the price is a table of **pricing dimensions**. Each dimension has a name, a price and a description. The description is the line a procurement analyst reads to answer one question: *what exactly am I buying?*

<span class="epistemic ep-fact">Fact</span> Across 6,966 live SaaS listings (at most two per seller, snapshot 29 September 2026), **77%** price only in “Units”, and **27%** have at least one pricing dimension whose description is blank, repeats the name, or is a few characters long.

## What goes wrong

A dimension called “Unit” with the description “Unit” tells the buyer nothing. They cannot estimate a budget, compare two vendors, or explain the number to a finance approver. So they do what any careful buyer does: they email you, or they pick a vendor whose price they can read.

<span class="epistemic ep-opinion">Opinion</span> The unit is the part of the page where a vague listing is cheapest to fix and most expensive to leave alone.

## Three questions every dimension should answer

Procurement reads a pricing table with three questions in mind. They are questions 4, 5 and 6 of the [12 reviewer questions](/blog/the-four-readers-of-your-aws-marketplace-listing/):

1. **What exactly is one unit, in plain words?**
2. **What happens if we go over what we bought?**
3. **What support and service level come with this price?**

## A before and after

These are made up. The pattern is real.

| | Before | After |
|---|---|---|
| Dimension name | Units | Named users |
| Unit | Units | Users |
| Description | “Unit” | “One named user with full query and dashboard access, billed monthly. Usage above your contracted users is billed at the same rate.” |

The “after” is only correct if the product behaves that way. Write what is true. If you do not charge overage, say so. If you do not know yet, that is a decision to make before the page, not a gap to hide in it.

## Writing the line

- **Start with the countable thing.** “One named user”, “One million API requests”, “One connected data source”.
- **Say what it includes.** The part of the product the unit covers.
- **Say the billing rhythm.** Monthly, annual, metered by the hour.
- **Say what overage does.** Same rate, tiered, or a limit.
- **No adjectives.** If a word cannot be checked, cut it.

## The private-offer question

<span class="epistemic ep-fact">Fact</span> Private offers set their own duration, so a short public contract length does not stop a multi-year deal.

<span class="epistemic ep-infer">Inference</span> The dimensions, though, are what a private offer is built from. A vague public dimension tends to carry its vagueness into the negotiation. Before your next enterprise deal, ask AWS how your current dimensions would support a ramped, multi-year offer, and fix the wording first if the answer is “not cleanly”.

## Do this today

Open your listing, read each pricing dimension aloud to a colleague who has never seen the product, and ask them to say what one unit is. If they cannot, rewrite it. The [free audit](/audit/) flags the same gaps and ranks them.
