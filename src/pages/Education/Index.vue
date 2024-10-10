<template>
  <div class="center-container relative md:card md:shadow-lg md:mt-8">
    <div class="text-3xl font-bold mb-6">My Education</div>

    <n-timeline :icon-size="iconSize" class="z-10">
      <n-timeline-item
        class="pb-4"
        time="2020 - 2024"
        type="warning"
        color="#b05fa4"
      >
        <div class="text-2xl font-semibold">Universiti Malaysia Sabah</div>
        <div class="text-lg font-semibold leading-tight mt-2">
          Bachelor of Computer Science with Honours in Network Engineering
        </div>
        <ul class="md:list-disc list-inside">
          <li class="mt-4 text-lg">
            CGPA: 3.94/4.00 (Highest in Cohort, Year 2020)
          </li>
          <li class="mt-4 text-lg">
            Kuok Foundation Scholar (RM21,000 Grant Scholarship)
          </li>
          <li class="mt-4 mb-4 text-lg">
            SabahNet Fortinet Security Fabric Range Challenge 2023 (3rd Place -
            RM2,000 Prize Winner)
          </li>
        </ul>
      </n-timeline-item>

      <n-timeline-item
        class="pb-4"
        time="2018 - 2020"
        type="warning"
        color="#b05fa4"
      >
        <div class="text-2xl font-semibold">St. Paul Institution</div>
        <div class="text-lg font-semibold leading-tight mt-2">
          Pre University | Form Six | STPM
        </div>
        <div>
          <ul class="md:list-disc list-inside">
            <li class="mt-4 text-lg">
              Full Science Stream - Physics, Chemistry, Mathematics(T)
            </li>
            <li class="mt-4 text-lg">Academic Bureau, Student's Council</li>
            <li class="mt-4 mb-4 text-lg">
              Vice President, St. Paul Boy Scouts
            </li>
          </ul>
        </div>
      </n-timeline-item>
    </n-timeline>
    <TeacherTeaching
      class="md:absolute right-0 bottom-0 z-0"
      width="310"
      height="310"
    />
  </div>
  <Nav></Nav>
</template>
<script setup>
import { NTimeline, NTimelineItem } from "naive-ui";
import TeacherTeaching from "../../assets/svg/TeacherTeaching.vue";
import Nav from "@/components/Nav/Index.vue";
const iconSize = 15;
</script>
