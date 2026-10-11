import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('laboratorio')
export class Laboratorio {
    @PrimaryGeneratedColumn() id!: number;
    @Column() nome!: string;
    @Column({ nullable: true }) localizacao?: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) criado_em!: Date;
}