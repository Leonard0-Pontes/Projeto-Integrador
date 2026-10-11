import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Solicitacao } from './solicitacao.entity';
import { Monitoria } from './monitoria.entity';

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;

    @Column({ nullable: true })
    curso!: string;

    @Column({ type: 'integer', nullable: true })
    periodo!: number;

    @Column()
    perfil!: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criado_em!: Date;

    @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.aluno)
    solicitacoes!: Solicitacao[];

    @OneToMany(() => Monitoria, (monitoria) => monitoria.monitor)
    monitorias!: Monitoria[];
}