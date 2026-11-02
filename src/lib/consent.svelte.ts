export type Consent = 'granted' | 'denied';

export const consent: { value: Consent | null | undefined } = $state({ value: undefined });
