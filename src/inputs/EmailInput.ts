import { InputType, Field } from "type-graphql";

@InputType()
export class CreateEmailInput {
  @Field()
  title: string;

  @Field()
  subject: string;
}

@InputType()
export class UpdateEmailInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  subject?: string;

  @Field({ nullable: true })
  isPublished?: boolean;
}
