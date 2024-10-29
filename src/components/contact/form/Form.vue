<template>
  <div class="pt-[32px]">
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Full Name -->
      <div class="md:col-span-2">
        <Input
          id="full-name"
          placeholder="Full Name"
          type="text"
          class="mt-1 block w-full"
        />
      </div>

      <!-- Your Email -->
      <div class="md:col-span-2">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          class="mt-1 block w-full"
        />
      </div>

      <!-- Province -->
      <div class="md:col-span-1">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Province" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="aceh">Aceh</SelectItem>
              <SelectItem value="bali">Bali</SelectItem>
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="jawa-tengah">Jawa Tengah</SelectItem>
              <SelectItem value="jawa-barat">Jawa Barat</SelectItem>
              <SelectItem value="jawa-timur">Jawa Timur</SelectItem>
              <SelectItem value="papua">Papua</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- City -->
      <div class="md:col-span-1">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cities</SelectLabel>
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
              <SelectItem value="medan">Medan</SelectItem>
              <SelectItem value="semarang">Semarang</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- Message -->
      <div class="md:col-span-2">
        <Textarea
          id="message"
          placeholder="Message"
          rows="4"
          class="mt-1 block w-full"
        ></Textarea>
      </div>

      <!-- Send Message Button -->
      <div class="md:col-span-2">
        <Button
          class="mt-4 w-full hover:scale-100 h-[64px] text-foreground font-semibold"
          >Send Message</Button
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/ui/input/Input.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",
});
</script>
