import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} 出現了.",
  "trainerAppeared": "{{trainerName}}\n想要和你對戰!",
  "trainerAppearedDouble": "{{trainerName}}\n想要和你對戰!",
  "singleWildAppeared": "一隻野生的 {{pokemonName}} 出現了!",
  "multiWildAppeared": "野生的 {{pokemonName1}}\n和 {{pokemonName2}} 出現了!",
  "playerComeBack": "回來吧, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} 收回了 {{pokemonName}}!",
  "playerGo": "去吧! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} 派出了 {{pokemonName}}!",
  "switchQuestion": "要更換\n{{pokemonName}}嗎?",
  "trainerDefeated": "你擊敗了\n{{trainerName}}!",
  "pokemonCaught": "{{pokemonName}} 被抓住了!",
  "pokemon": "寶可夢",
  "sendOutPokemon": "上吧! {{pokemonName}}!",
  "hitResultCriticalHit": "擊中了要害!",
  "hitResultSuperEffective": "效果拔群!",
  "hitResultNotVeryEffective": "收效甚微…",
  "hitResultNoEffect": "對 {{pokemonName}} 沒有效果!",
  "hitResultOneHitKO": "一擊切殺!",
  "attackFailed": "但是失敗了!",
  "attackHitsCount": "擊中 {{count}} 次!",
  "expGain": "{{pokemonName}} 獲得了 {{exp}} 經驗值!",
  "levelUp": "{{pokemonName}} 升級到 Lv. {{level}}!",
  "learnMove": "{{pokemonName}} 學會了{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} 想要學習 {{moveName}}.",
  "learnMoveLimitReached": "但是, {{pokemonName}} 已經學會了\n四個招式.",
  "learnMoveReplaceQuestion": "要忘記一個招式並學習 {{moveName}} 嗎?",
  "learnMoveStopTeaching": "不再嘗試學習\n{{moveName}}嗎?",
  "learnMoveNotLearned": "{{pokemonName}} 沒有學會 {{moveName}}.",
  "learnMoveForgetQuestion": "要忘記哪個技能?",
  "learnMoveForgetSuccess": "{{pokemonName}} 忘記了 {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, 和@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}噗!",
  "learnMoveAnd": "然後…",
  "levelCapUp": "等級上限提升到 {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} 未實裝，無法選擇。",
  "moveNoPP": "這個技能的PP用完了",
  "moveDisabled": "{{moveName}} 被禁用!",
  "noPokeballForce": "一股無形的力量阻止了你使用精靈球。",
  "noPokeballTrainer": "你不能捕捉其他訓練家的寶可夢!",
  "noPokeballMulti": "只能在剩下一隻寶可夢時才能扔出精靈球!",
  "noPokeballStrong": "目標寶可夢太強了，無法捕捉！你需要先\n削弱它!",
  "noEscapeForce": "一股無形的力量阻止你逃跑。",
  "noEscapeTrainer": "你不能從訓練家對戰中逃跑!",
  "noEscapePokemon": "{{pokemonName}} 的 {{moveName}} 阻止了你 {{escapeVerb}}!",
  "runAwaySuccess": "你成功逃脫了!",
  "runAwayCannotEscape": "你無法逃脫!",
  "escapeVerbSwitch": "切換",
  "escapeVerbFlee": "逃跑",
  "notDisabled": "{{moveName}} 不再被禁用!",
  "skipItemQuestion": "你要跳過拾取道具嗎?",
  "eggHatching": "咦?",
  "ivScannerUseQuestion": "對 {{pokemonName}} 使用個體值掃描?",
  "wildPokemonWithAffix": "Wild {{pokemonName}}",
  "foePokemonWithAffix": "Foe {{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}} used {{moveName}}!",
  "drainMessage": "{{pokemonName}} had its\nenergy drained!",
  "regainHealth": "{{pokemonName}} regained\nhealth!"
} as const;
