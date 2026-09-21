import { CredentialGroup } from '../../generated/prisma/client.js';

export type CredentialGroupWithParent = CredentialGroup & {
  parent: {
    id: string;
    name: string;
  } | null;
};

export interface CredentialGroupMenuItem {
  id: string;
  name: string;
  description: string | null;
  children: CredentialGroupMenuItem[];
}