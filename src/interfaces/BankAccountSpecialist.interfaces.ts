export interface BankAccountSpecialistValidate {
  bankId: number,
  accountNumber: string,
  cci: string,
}

export interface BankAccountSpecialist extends BankAccountSpecialistValidate {
  preferred: boolean,
  specialistId: string,
}