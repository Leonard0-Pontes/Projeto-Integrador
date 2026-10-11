import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Usuario } from '../../entities/usuario.entity';
import { Disciplina } from '../../entities/disciplina.entity';
import { Monitoria } from '../../monitoria/entities/monitoria.entity';

@Entity('solicitacao')
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    aluno_id: number;

    @Column()
    disciplina_id: number;

    @Column()
    assunto: string;

    @Column({ type: 'text', nullable: true })
    descricao: string;

    @Column({ type: 'date' })
    data_preferida: Date;

    @Column({ type: 'time' })
    horario_preferido: string;

    @Column({ nullable: true })
    modalidade: string;

    @Column({ nullable: true })
    local_monitoria: string;

    @Column()
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criado_em: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.solicitacoes)
    @JoinColumn({ name: 'aluno_id' })
    aluno: Usuario;

    @ManyToOne(() => Disciplina)
    @JoinColumn({ name: 'disciplina_id' })
    disciplina: Disciplina;

    @OneToOne(() => Monitoria, (monitoria) => monitoria.solicitacao)
    monitoria: Monitoria;
}