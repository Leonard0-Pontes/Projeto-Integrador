import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('disciplina')
export class Disciplina {
    @PrimaryGeneratedColumn() id!: number;
    @Column() nome!: string;
    @Column() codigo!: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) criado_em!: Date;
}