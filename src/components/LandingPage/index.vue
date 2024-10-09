<template>
  <Nav></Nav>
  <div
    class="center-container md:flex md:items-center md:justify-center"
    style="min-height: 95vh"
  >
    <div class="md:card lg:w-4/5 md:flex md:space-x-10 md:shadow-lg">
      <div class="md:w-2/5 flex justify-center">
        <HalfBody class="w-1/2 md:w-full h-auto" />
      </div>
      <div class="md:w-3/5 px-9 md:px-0">
        <div class="text-4xl font-bold md:mt-11 mt-4">Joey Lim</div>
        <div class="text-lg mt-2 font-semibold">Fullstack Developer</div>

        <div class="flex mt-6 space-x-6 md:space-x-12">
          <div class="w-1/2 md:w-fit">
            <div class="text-base md:text-lg font-semibold">About</div>
            <div class="mt-1 text-sm md:text-base md:font-light">
              Fast Learner
            </div>
            <div class="mt-1 text-sm md:text-base md:font-light">
              Problem Solver
            </div>
            <div class="mt-1 text-sm md:text-base md:font-light">
              Creative Thinker
            </div>

            <div class="mt-1 text-sm md:text-base md:font-light">
              Loves Good UI
            </div>
            <div class="mt-1 text-sm md:text-base md:font-light">
              Types 100wpm!
            </div>
          </div>
          <div class="w-1/2 md:w-fit">
            <div class="text-base md:text-lg font-semibold">Frontend</div>
            <div class="text-sm md:text-base md:font-light mt-1">
              React, Vue<span class="hidden md:inline md:font-light"
                >, Bootstrap, Tailwind</span
              >
            </div>
            <div class="text-base md:text-lg font-semibold mt-1">Backend</div>
            <div class="text-sm md:text-base md:font-light mt-1">
              Rails, Laravel
              <span class="hidden md:inline md:font-light"
                >, GraphQL, REST APIs</span
              >
            </div>
            <div class="text-base md:text-lg font-semibold mt-1">
              3rd Party APIs
            </div>
            <div class="text-sm md:text-base md:font-light mt-1">
              Stripe, Meta, Google, Groq AI
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
import HalfBody from "@/assets/svg/Potrait/HalfBody.vue";
import Nav from "@/components/Nav/Index.vue";
</script>
