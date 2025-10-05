import EmailTemplate from "@/components/resend/EmailTemplate";
import { protectedProcedure, router } from "@/utils/server/trpc";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendRouter = router({
  sendVerificationEmail: protectedProcedure
    .input(
      z.object({ firstName: z.string(), email: z.email(), text: z.string(), userImage: z.url() })
    )
    .query(async ({ input }) => {
      const { firstName, email, text, userImage } = input;

      try {
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_APP_EMAIL!,
          to: [email],
          subject: "Verify your email",
          react: EmailTemplate(firstName, text, userImage),
        });

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }),
});
