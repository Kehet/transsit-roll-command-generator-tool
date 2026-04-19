<script setup lang="ts"></script>

<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="relative mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
  >
    <!-- GitHub Ribbon -->
    <a
      href="https://github.com/Kehet/transsit-roll-command-generator-tool"
      target="_blank"
      class="absolute right-0 top-0 z-50 hidden h-32 w-32 overflow-hidden lg:block"
      aria-label="View source on GitHub"
    >
      <div
        class="absolute right-[-35px] top-[32px] w-[180px] rotate-45 bg-teal-600 py-1 text-center text-sm text-white shadow-md transition-colors hover:bg-teal-500"
      >
        GitHub
      </div>
    </a>
    <!-- END GitHub Ribbon -->
    <!-- Page Header -->
    <header
      id="page-header"
      class="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-gray-800"
    >
      <div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div class="flex justify-between pb-4 pt-6">
          <!-- Left Section -->
          <div class="flex items-center">
            <!-- Logo -->
            <span
              class="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <span class="sm:hidden">Transsit</span>
              <span class="hidden sm:inline">Transsit Rollaustyökalu</span>
            </span>
            <!-- END Logo -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="flex items-center gap-2 lg:gap-5">
            <!-- Navigation -->
            <nav class="flex items-center gap-2">
              <RouterLink
                to="/"
                class="group flex items-center gap-2 rounded border px-3 py-2 border-transparent text-gray-800 hover:bg-teal-50 hover:text-teal-600 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                active-class="border-teal-100 bg-teal-50 text-teal-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.598 2.343a6.433 6.433 0 0 1 7.419 7.5c-.125.682.008 1.28.359 1.63l5.566 5.567a2.76 2.76 0 0 1-3.902 3.902l-5.566-5.566c-.35-.35-.949-.484-1.63-.36a6.434 6.434 0 0 1-7.5-7.418a1.495 1.495 0 0 1 1.154-1.226c.54-.123 1.133.04 1.56.467l2.545 2.544a.197.197 0 0 0 .272 0l1.508-1.508a.197.197 0 0 0 0-.272L6.84 5.058a1.69 1.69 0 0 1-.467-1.56c.127-.56.562-1.04 1.226-1.155"
                  />
                </svg>
                <span class="hidden sm:inline">Työkalu</span>
              </RouterLink>

              <RouterLink
                to="/settings"
                class="group flex items-center gap-2 rounded border px-3 py-2 border-transparent text-gray-800 hover:bg-teal-50 hover:text-teal-600 active:border-teal-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                active-class="border-teal-100 bg-teal-50 text-teal-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m320 42.667l.003 49.332a175.8 175.8 0 0 1 45.988 26.596l42.761-24.687l64 110.851l-42.743 24.68A177.4 177.4 0 0 1 432 256c0 9.03-.68 17.9-1.991 26.562l42.743 24.68l-64 110.85l-42.76-24.687a175.8 175.8 0 0 1-45.99 26.596L320 469.334H192v-49.332a175.8 175.8 0 0 1-45.99-26.596l-42.761 24.687l-64-110.852l42.743-24.678A177.4 177.4 0 0 1 80.001 256c0-9.029.679-17.9 1.99-26.562l-42.743-24.679l64-110.851l42.76 24.687A175.8 175.8 0 0 1 191.999 92L192 42.667zM256 192c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.654-64-64-64"
                  />
                </svg>
                <span class="hidden sm:inline">Asetukset</span>
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
    <footer id="page-footer" class="flex flex-none items-center bg-white dark:bg-gray-800">
      <div
        class="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8 xl:max-w-7xl"
      >
        <div class="pb-1 pt-4 md:pb-4">&copy; Kehet</div>
      </div>
    </footer>
    <!-- END Page Footer -->
  </div>
  <!-- END Page Container -->
</template>
