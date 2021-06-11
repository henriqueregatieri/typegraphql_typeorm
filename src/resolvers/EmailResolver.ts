import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Email } from "../models/Email";
import { CreateEmailInput, UpdateEmailInput } from "../inputs/EmailInput";

@Resolver()
export class EmailResolver {
  @Query(() => [Email])
  emails() {
    return Email.find();
  }

  @Query(() => Email)
  email(@Arg("id") id: string) {
    return Email.findOne({ where: { id } });
  }

  @Mutation(() => Email)
  async createEmail(@Arg("data") data: CreateEmailInput) {
    const email = Email.create(data);
    await email.save();
    return email;
  }

  @Mutation(() => Email)
  async updateEmail(@Arg("id") id: string, @Arg("data") data: UpdateEmailInput) {
    const email = await Email.findOne({ where: { id } });
    if (!email) throw new Error("Email not found!");
    Object.assign(email, data);
    await email.save();
    return email;
  }

  @Mutation(() => Boolean)
  async deleteEmail(@Arg("id") id: string) {
    const email = await Email.findOne({ where: { id } });
    if (!email) throw new Error("Email not found!");
    await email.remove();
    return true;
  }
}
