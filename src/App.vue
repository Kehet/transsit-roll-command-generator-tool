<script setup lang="ts">

</script>

<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
  >
    <!-- Page Header -->
    <header
      id="page-header"
      class="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-gray-800"
    >
      <div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div class="flex justify-between py-4">
          <!-- Left Section -->
          <div class="flex items-center">
            <!-- Logo -->
            <span
              class="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              Transsit Roll Command Generator Tool
            </span>
            <!-- END Logo -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="flex items-center gap-2 lg:gap-5">
            <!-- Desktop Navigation -->
            <nav class="hidden items-center gap-2 lg:flex">

              <RouterLink to="/"
                          class="group flex items-center gap-2 rounded-lg border px-3 py-2 border-transparent text-gray-800 hover:bg-teal-50 hover:text-teal-600 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                          active-class="border-teal-100 bg-teal-50 text-teal-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
                          >
                <svg
                  class="hi-mini hi-home inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Calculator</span>
              </RouterLink>


              <RouterLink to="/settings"
                          class="group flex items-center gap-2 rounded-lg border px-3 py-2 border-transparent text-gray-800 hover:bg-teal-50 hover:text-teal-600 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                          active-class="border-teal-100 bg-teal-50 text-teal-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
              >

                <svg
                  class="hi-mini hi-chart-bar inline-block size-5 opacity-25 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
                  />
                </svg>
                <span>Settings</span>

              </RouterLink>

            </nav>
            <!-- END Desktop Navigation -->
          </div>
          <!-- END Right Section -->
        </div>
      </div>
    </header>
    <!-- END Page Header -->

    <!-- Page Content -->
    <main id="page-content" class="flex max-w-full flex-auto flex-col">
      <!-- Page Section -->
      <div class="container mx-auto p-4 lg:p-8 xl:max-w-7xl">

        <RouterView />

      </div>
      <!-- END Page Section -->
    </main>
    <!-- END Page Content -->

    <!-- Page Footer -->
    <footer
      id="page-footer"
      class="flex flex-none items-center bg-white dark:bg-gray-800"
    >
      <div
        class="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8 xl:max-w-7xl"
      >
        <div class="pb-1 pt-4 md:pb-4">
          &copy; Kehet
        </div>
      </div>
    </footer>
    <!-- END Page Footer -->
  </div>
  <!-- END Page Container -->
</template>
