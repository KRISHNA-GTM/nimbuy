---
title: "The four readers of your AWS Marketplace listing, and the 12 questions that stall a deal"
description: "Security, procurement, a technical evaluator and AI search each read your listing for different things. Twelve questions decide whether a deal moves or stalls."
date: 2026-10-02
tag: Method
readMinutes: 7
---

Most listings are written once, for one imagined reader, at launch. In practice a listing is read by four different readers, usually in sequence, usually without anyone telling the seller.

<span class="epistemic ep-opinion">Opinion</span> This is the method we use for every audit. It is a working framework, not an AWS standard.

## The four readers

1. **Security.** They are working through a questionnaire. They open your listing to find answers before they email you.
2. **Procurement.** They need a number they can compare and explain to finance.
3. **Technical.** They want to know it fits their stack and how long it takes to work.
4. **AI search.** An assistant summarises your listing to a buyer who may never open the page. It can only use what is written there.

## The 12 questions

Three per reader. These are the ones that stop or stall a deal.

| # | Reader | Question |
|---|---|---|
| 1 | Security | Where is customer data stored: which AWS regions, and can the customer choose? |
| 2 | Security | Which certifications or reports can you share (SOC 2 Type II, ISO 27001, and so on)? |
| 3 | Security | How long is customer data kept, how is it deleted, and (for AI products) is it used to train models? |
| 4 | Procurement | What exactly is one pricing unit, in plain words? |
| 5 | Procurement | What happens if we go over what we bought? |
| 6 | Procurement | What support and SLA come with this price? |
| 7 | Technical | How is it deployed, and what do we need in place first? |
| 8 | Technical | Which AWS services and third-party tools does it connect to, by name? |
| 9 | Technical | How long from subscribing to the first working result? |
| 10 | AI search | In one sentence, what does it do and for whom? |
| 11 | AI search | Which specific use cases does it solve, in buyer words? |
| 12 | AI search | What evidence backs the claims: numbers with a source or date, named customers, reviews? |

## How to score yourself: “answers X of 12”

Mark each question one of three ways, using only what the listing page itself says:

- **Yes.** The listing's own text answers it. You can quote the sentence.
- **Partly.** An answer exists but is vague, contradicts another part of the page, or sits only on a linked page.
- **No.** It is not on the page. An empty field counts as No.

The score is the number of **Yes** answers, with Partly shown beside it: “answers 4 of 12, 3 partly”.

Two rules keep it honest. A standard AWS page element only counts as Yes when it truly answers the question: a “Request private offer” button does not answer question 4. And quote the evidence, every time. A Yes you cannot quote is a guess.

## What the data says about where listings fall short

<span class="epistemic ep-fact">Fact</span> Across 6,966 live SaaS listings, 80% name no AWS service (question 8), 74% have no security or compliance term (questions 1 to 3), and 77% price only in “Units” (question 4). The full table is in [what 6,966 listings leave out](/blog/what-6966-aws-marketplace-listings-leave-out/).

<span class="epistemic ep-infer">Inference</span> Because the three biggest gaps fall on three different readers, a rewrite that fixes only the copy tends to leave at least one reader without an answer.

## Using this on your own listing

Print the 12 questions, open your listing, and mark each one. It takes about twenty minutes, and the shortest gap list usually comes from the questions marked No. The [Playbook](/playbook/) turns each question into a worksheet with what a good answer contains and what to leave out, and the [free audit](/audit/) scores the page on the seven dimensions behind these questions.
