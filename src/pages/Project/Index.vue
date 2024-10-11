<template>
  <div class="center-container px-2 md:px-0">
    <div class="text-3xl font-bold mb-4">My Projects</div>
    <div>
      <div class="videowrapper">
        <iframe
          width="500"
          height="281.43"
          src="https://www.youtube.com/embed/--PAX3v9gpk?si=jgOFpqOAvbQawhWL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="rounded-lg border-2"
        ></iframe>
      </div>

      <div class="text-xl md:text-2xl font-semibold mt-4">
        innoBAT.AI - AI Product Idea Generator
        <a
          href="https://innobat.mycscums.com.my/"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>

      <ul class="md:list-disc md:ms-4 mt-2">
        <li class="mt-2 md:mt-0">
          Developed a full-stack website for generating product ideas using AI
        </li>
        <li class="mt-2 md:mt-0">Integrated GROQ AI and Pollinations AI</li>

        <li class="mt-2 md:mt-0 md:text-normal">
          Built the system with Laravel and Vue.js
        </li>
      </ul>

      <div class="mt-2">
        <div class="underline font-bold">Login Credentials</div>
        <div>Email: tester@gmail.com</div>
        <div>Password: password</div>
      </div>
    </div>

    <div>
      <img :src="MycscLanding" width="500" class="rounded-lg border-2 mt-12" />
      <div class="text-xl md:text-2xl font-semibold mt-4">
        MyCSC@UMS: Web-Based Cybersecurity Clinic Management System
        <a
          href="https://staging.mycscums.com.my/"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>

      <ul class="md:list-disc md:ms-4 mt-2">
        <li class="mt-2 md:mt-0">
          Fullstack website to streamline Clinic's daily operations
        </li>
        <li class="mt-2 md:mt-0">
          Designed a system using Entity Relationship Diagrams (ERD) and Data
          Flow Diagrams (DFD)
        </li>
        <li class="mt-2 md:mt-0">
          Designed wireframes of system interfaces using Figma
        </li>

        <li class="mt-2 md:mt-0 md:text-normal">
          Developed the system using Laravel, Bootstrap, MariaDB etc
        </li>

        <li class="mt-2 md:mt-0">
          Integrated a smart card reader to extract MyKad information within the
          web application
        </li>

        <li class="mt-2 md:mt-0">
          Evaluated system functionalities using System Usability Scale (SUS)
          approach
        </li>
      </ul>

      <div class="mt-2">
        <div class="underline font-bold">Login Credentials</div>
        <div>Email: admin@email.com</div>
        <div>Password: password</div>
      </div>
    </div>

    <div>
      <img :src="BitView" width="500" class="rounded-lg border-2 mt-12" />

      <div class="text-xl md:text-2xl font-semibold mt-4">
        BitView: Bitcoin Market Overview
        <a
          href="https://bitview.mycscums.com.my/"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>
      <ul class="md:list-disc md:ms-4 mt-2">
        <li class="mt-2 md:mt-0">
          Displays the historical prices of Bitcoin over the past year,
          retrieved using the CoinGecko API.
        </li>
        <li class="mt-2 md:mt-0">
          Provides Bitcoin price predictions using the Groq AI API.
        </li>
      </ul>
    </div>

    <div>
      <img :src="WhatsappLink" width="500" class="rounded-lg border-2 mt-12" />

      <div class="text-xl md:text-2xl font-semibold mt-4">
        WhatsApp Link Generator
        <a
          href="https://imyourjoy.vercel.app/ws"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>
      <ul class="md:list-disc md:ms-4 mt-2">
        <li class="mt-2 md:mt-0">
          Creates a direct link for starting a WhatsApp chat with a specific
          phone number
        </li>
        <li class="mt-2 md:mt-0">
          Allows the option to pre-fill a message for the user to send
        </li>
        <li class="mt-2 md:mt-0">
          Displays the phone number and message in a preview, simulating a
          mobile phone layout
        </li>
      </ul>
    </div>

    <div>
      <img :src="PokemonQuiz" width="500" class="rounded-lg border-2 mt-12" />
      <div class="text-xl md:text-2xl font-semibold mt-4 mb-2">
        Pokemon Quiz
        <a
          href="https://imyourjoy.vercel.app/poke"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>
      <ul class="md:list-disc md:ms-4">
        <li class="mt-2 md:mt-0">
          Queries all 151 first-generation Pokémon for users to select from
        </li>
        <li class="mt-2 md:mt-0">
          Generates quiz questions based on the details of the chosen Pokémon
        </li>
        <li class="mt-2 md:mt-0">
          Retrieves Pokémon details and images through Axios calls to the
          official Pokémon API
        </li>
        <li class="mt-2 md:mt-0">
          Displays quiz results based on the user's selections
        </li>
      </ul>
    </div>

    <div>
      <img
        :src="FacultyLanding"
        width="500"
        class="rounded-lg border-2 mt-12"
      />

      <div class="text-xl md:text-2xl font-semibold mt-4 mb-2">
        Faculty of Computing and Informatics Landing Page
        <a
          href="https://imyourjoey.github.io/project01/"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>

      <ul class="md:list-disc md:ms-4">
        <li class="mt-2 md:mt-0">
          Designed and developed the frontend interface for the faculty website
        </li>
        <li class="mt-2 md:mt-0">
          Integrated the Mapbox API to provide directions to the faculty
        </li>
      </ul>
    </div>

    <div>
      <img :src="CinemaLanding" width="500" class="rounded-lg border-2 mt-10" />
      <div class="text-xl md:text-2xl font-semibold mt-4 mb-2">
        Big Screen Cinema Landing Page
        <a
          href="https://imyourjoey.github.io/big-screen-cinema/"
          target="_blank"
          class="underline text-blue-700"
          >[Link]</a
        >
      </div>
      <ul class="md:list-disc md:ms-4">
        <li class="mt-2 md:mt-0">
          Designed and developed the landing page, movie selection page, and
          seat selection page for the cinema website
        </li>
      </ul>
    </div>
  </div>

  <Nav></Nav>
</template>

<script setup>
import Nav from "@/components/Nav/Index.vue";

import CinemaLanding from "@/assets/gif/cinema-landing.webp";
import FacultyLanding from "@/assets/gif/faculty-landing.webp";
import MycscLanding from "@/assets/gif/mycsc.webp";
import PokemonQuiz from "@/assets/gif/pokemon-quiz.webp";
import WhatsappLink from "@/assets/gif/whatsapp-link.webp";
import BitView from "@/assets/gif/bitview-screenshot.png";
</script>

<style scoped>
.videowrapper {
  float: none;
  clear: both;
  width: 100%;
  max-width: 500px;
  position: relative;
  padding-top: 25px;
  height: 281.43px;
}
.videowrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
