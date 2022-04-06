import { CatColor } from 'src/enums/cat-color.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CatColor,
  })
  color: CatColor;

  @Column()
  birthday: Date;

  constructor(cats: Partial<Cat>) {
    Object.assign(this, cats);
  }
}
