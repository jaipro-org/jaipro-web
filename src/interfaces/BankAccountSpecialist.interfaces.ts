interface BankAccountSpecialist {
  accountNumber: string,
  cci: string,
  currency: number,
  preferred: boolean,
  specialistId: string,
  bankId: number,
}

export default BankAccountSpecialist;