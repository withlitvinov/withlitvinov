<script setup lang="ts">
import { WLIcon, type WLIconName } from './components'

type Social = {
  key: string
  icon: WLIconName
  href: string
  caption: string
}

type Data = {
  name: string
  photoUrl: string
  cv: {
    url: string
    downloadName: string
  }
  position: string
  socials: Social[]
}

const data: Data = {
  name: 'Anatolii Litvinov',
  photoUrl: 'https://withlitvinov-assets.s3.eu-west-1.amazonaws.com/profile/profile_photo.jpg',
  cv: {
    url: 'https://withlitvinov-assets.s3.eu-west-1.amazonaws.com/profile/anatolii_litvinov_software_engineer_cv.pdf',
    downloadName: 'anatolii_litvinov_software_engineer_cv',
  },
  position: 'Software engineer',
  socials: [
    {
      key: 'linkedin',
      icon: 'Linkedin',
      href: 'https://www.linkedin.com/in/anatolii-litvinov/',
      caption: 'Linkedin',
    },
    {
      key: 'github',
      icon: 'Github',
      href: 'https://github.com/anatoliilitvinovr/',
      caption: 'Github',
    },
  ],
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="space-y-[48px]">
      <section
        id="about"
        class="space-y-[32px] sm:space-y-[24px]"
      >
        <div class="flex flex-col items-center gap-[1.5rem] sm:flex-row sm:items-start">
          <div class="relative h-[12rem] w-[12rem]">
            <img
              :src="data.photoUrl"
              alt="profile"
              class="rounded-full"
            >
          </div>
          <div class="flex flex-col items-center sm:items-start">
            <h1 class="font-inter-tight text-[2rem] font-bold leading-[2.5rem]">
              {{ data.name }}
            </h1>
            <h2 class="mt-[0.25rem] text-[1rem] leading-[1.25rem] text-gray-500">
              {{ data.position }}
            </h2>
            <div class="mt-[12px] flex flex-row items-center gap-x-[12px]">
              <div class="flex flex-row gap-x-[8px]">
                <a
                  v-for="(social, i) in data.socials"
                  :key="i"
                  :href="social.href"
                  :title="social.caption"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition duration-300 hover:cursor-pointer hover:text-blue-500"
                >
                  <WLIcon
                    :name="social.icon"
                    class="size-[1.5rem]"
                  />
                </a>
              </div>
              <a
                :href="data.cv.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-[2rem] flex-row items-center gap-x-[0.5rem] rounded-full bg-neutral-950 px-[0.75rem] text-white transition duration-300 hover:bg-neutral-700"
              >
                Get CV
              </a>
            </div>
            <div class="mt-[24px] text-[1.1rem] font-medium text-sky-700">
              #WorkingOnSomething
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
