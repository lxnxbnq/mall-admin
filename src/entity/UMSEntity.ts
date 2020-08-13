import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// ums_admin表 实体
@Entity()
export class UmsAdmin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  icon: string;

  @Column()
  email: string;

  @Column()
  nick_name: string;

  @Column()
  note: string;

  @Column()
  create_time: string;

  @Column()
  login_time: string;

  @Column()
  status: number;
}

@Entity()
export class UmsRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  admin_count: number;

  @Column()
  create_time: string;

  @Column()
  status: number;

  @Column()
  sort: number;
}
