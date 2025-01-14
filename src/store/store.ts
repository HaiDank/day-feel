import { writable } from "svelte/store";

export const colorScheme = writable<string[]>(['#F7E58C', '#EEBB79', '#E2894D', '#9C495D', '#393B57'])