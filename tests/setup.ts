import { vi } from 'vitest';

// Mock Stripe before importing anything that uses it
vi.mock('stripe', () => {
  const mockSession = {
    url: 'https://checkout.stripe.com/test',
    id: 'cs_test_mock',
  };

  return {
    default: vi.fn().mockImplementation(() => ({
      checkout: {
        sessions: {
          create: vi.fn().mockResolvedValue(mockSession),
        },
      },
      customers: {
        create: vi.fn().mockResolvedValue({ id: 'cus_test_mock' }),
      },
    })),
  };
});

// Mock Resend
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: 'em_test_mock' }),
    },
  })),
}));

// Mock database - shared across tests
export const mockDb = {
  prepare: vi.fn().mockReturnValue({
    run: vi.fn().mockReturnValue({ changes: 1, lastInsertRowid: 1 }),
    get: vi.fn().mockReturnValue(null),
    all: vi.fn().mockReturnValue([]),
  }),
};

vi.mock('@/lib/db', () => ({
  getDb: () => mockDb,
}));
