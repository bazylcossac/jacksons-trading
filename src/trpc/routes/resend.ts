import EmailTemplate from "@/components/resend/EmailTemplate";
import { publicProcedure, router } from "@/utils/server/trpc";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendRouter = router({
  sendVerificationEmail: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        email: z.email(),
        text: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { firstName, email, text } = input;

      try {
        await resend.emails.send({
          from: process.env.RESEND_APP_EMAIL!,
          to: [email],
          subject: "Verify your email",
          react: EmailTemplate(firstName, text),
        });
      } catch (error) {
        console.error(error);
      }
    }),
});
