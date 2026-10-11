import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';
import { Laboratorio } from '../../entities/laboratorio.entity';
import { Solicitacao } from '../../solicitacao/entities/solicitacao.entity';

@Entity('monitoria')
export class Monitoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    solicitacao_id!: number;

    @Column()
    monitor_id!: number;

    @Column({ nullable: true })
    laboratorio_id!: number;

    @Column({ type: 'date' })
    data!: Date;

    @Column({ type: 'time' })
    horario!: string;

    @Column({ nullable: true })
    modalidade!: string;

    @Column({ nullable: true })
    link?: string;

    @Column()
    status!: string;

    @Column({ type: 'text', nullable: true })
    justificativa?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criado_em!: Date;

    @OneToOne(() => Solicitacao, (solicitacao) => solicitacao.monitoria)
    @JoinColumn({ name: 'solicitacao_id' })
    solicitacao: Solicitacao;

    @ManyToOne(() => Usuario, (usuario) => usuario.monitorias)
    @JoinColumn({ name: 'monitor_id' })
    monitor: Usuario;

    @ManyToOne(() => Laboratorio)
    @JoinColumn({ name: 'laboratorio_id' })
    laboratorio: Laboratorio;
}