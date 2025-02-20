export const GA_CTA_EVENTS = {
  loginSuccess: "login_success",
  selectExchange: "select_exchange",
  presetAdd1: "preset_add_1",
  presetAdd2: "preset_add_2",
  presetAdd3: "preset_add_3",
  startBot1: "start_bot_1",
  startBot2: "start_bot_2",
} as const;

export type GA_CTA_EVENT = (typeof GA_CTA_EVENTS)[keyof typeof GA_CTA_EVENTS];
