export const locationInputValidator = (inputValue: string) => {
  // FIXME: 국내/해외로 나눌시 파라미터로 받고 각각 데이터검증 실행
  return inputValue.trim() !== '' && inputValue
}
