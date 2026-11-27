export function paraData(data: string): Date {
  const [ano, mes, dia] = data.split('-').map(Number);
  return new Date(Date.UTC(ano, mes - 1, dia));
}

export function paraHorario(horario: string): Date {
  const [hora, minuto] = horario.split(':').map(Number);
  return new Date(Date.UTC(2026, 0, 1, hora, minuto));
}

export function horarioEmMinutos(horario: string): number {
  const [hora, minuto] = horario.split(':').map(Number);
  return hora * 60 + minuto;
}