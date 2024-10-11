<template>
  <div class="center-container px-5 md:px-0 relative">
    <div class="text-3xl font-bold">My Experiences</div>
    <div class="mb-6 mt-1.5">
      A summary of the roles and accomplishments, that have shaped my
      professional journey
    </div>

    <n-timeline :icon-size="iconSize" class="z-10">
      <n-timeline-item
        class="pb-4"
        time="Mar 2024 - Sep 2024"
        type="warning"
        color="#b05fa4"
      >
        <div class="text-2xl font-semibold">
          Mulah Rewards - #1 Loyalty Program in Malaysia
        </div>
        <div class="text-lg font-semibold leading-tight mt-2">
          Full Stack Software Engineer (VueJs, Ruby on Rails, GraphQL)
        </div>
        <ul class="md:list-disc list-outside md:ms-4">
          <li class="mt-2 leading-tight">
            Developed scalable, user-friendly web applications serving hundreds
            of businesses and millions of customers across Malaysia and
            Indonesia.
          </li>
          <li class="mt-2 leading-tight">
            Contributed to a dynamic, fast-paced environment, delivering
            approximately one feature per developer each week.
          </li>
          <li class="mt-2 leading-tight">
            Collaborated with product managers and QA teams to iteratively
            enhance products.
          </li>
          <li class="mt-2 mb-4 leading-tight">
            Website:
            <a
              class="underline text-blue-700"
              href="https://simpleloyalty.com"
              target="_blank"
              >https://simpleloyalty.com</a
            >
          </li>
        </ul>
      </n-timeline-item>

      <n-timeline-item
        class="pb-4"
        time="May 2020 - May 2021"
        type="warning"
        color="#b05fa4"
      >
        <div class="text-2xl font-semibold">IJM Land Berhad</div>
        <div class="text-lg font-semibold leading-tight mt-2">
          Front Desk Receptionist - Gym
        </div>
        <ul class="md:list-disc list-outside md:ms-4">
          <li class="mt-2 leading-tight">
            Verify gym members' identities using RFID cards and specialised
            software
          </li>
          <li class="mt-2 leading-tight mb-4">
            Update bookings for classes using gym management software
          </li>
        </ul>
      </n-timeline-item>

      <n-timeline-item
        class="pb-4"
        time="Feb 2017 - Feb 2019
"
        type="warning"
        color="#b05fa4"
      >
        <div class="text-2xl font-semibold">Private Tutor</div>

        <ul class="md:list-disc list-outside md:ms-4">
          <li class="mt-2 leading-tight">
            Tutoring students on a one-to-one basis (Physics, Mathematics, MS
            Office, C++ Programming)
          </li>
          <li class="mt-2 leading-tight mb-4">
            Update bookings for classes using gym management software
          </li>
        </ul>
      </n-timeline-item>
    </n-timeline>
  </div>
  <Nav></Nav>
</template>
<script setup>
import { NTimeline, NTimelineItem } from "naive-ui";
import Nav from "@/components/Nav/Index.vue";
const iconSize = 15;
</script>
