import React from "react";

const TeamAArticleContent = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <p>
        First up, we will be introducing <b>External Team A</b>!{" "}
        <b>External Team A</b> consists of the following members - Brandon, Jia
        Ming, Rohan, Rachel, Vanessa, Nelson, Hanming, Iman and Zijian.
      </p>
      <p>
        Having heard about the numerous stories from the autism community, Team
        A recognised that individuals with autism face difficulties integrating
        into society despite having much potential in terms of their abilities.
        Furthermore, parents of children with autism may sometimes feel helpless
        as to how to support their children in their learning journey,
        especially in the initial stage when they first come to know that their
        children have autism.
      </p>
      <p>
        This <b>inspired</b> Team A to find ways in which they can help to
        assist the autism community in Singapore. In particular, Team A is
        interested in exploring the possibility of developing a platform to
        provide support to parents of children with autism. This led to the
        creation of Auturec – a digital platform developed{" "}
        <b>in collaboration with Nurture Pods Pte Ltd (“Nurture Pods”)</b> to
        help parents support children with autism in their learning journey.{" "}
      </p>
      <p className="margin-bottom-medium">
        <b>Now, you may be wondering: How exactly does Auturec work?</b>
      </p>

      <ol className="team-article__list margin-bottom-medium">
        <p>
          Upon gathering insights from the specialists from Nurture Pods, Team A
          is putting together a web-application with the following features:
        </p>
        <li>
          Games & activities that are can be customised to suit the different
          needs of children with autism, thereby reinforcing their learning to
          develop the various skill sets
        </li>
        <li>
          Dashboard for parents to track the performance of their child, as well
          as to provide recommendations to enhance his/her progress
        </li>
        <li>
          Forum & Frequently Asked Questions to encourage the sharing of
          information, tips, and support amongst parents, while enabling parents
          to gain professional insights
        </li>
      </ol>

      <p>
        All these features will empower parents of children with autism to play
        a more proactive role in their children’s learning journey and to
        reinforce what the school provides for. In the long term, Team A hopes
        to that with the support of Nurture Pods, they will be able to develop
        Auturec into a one-stop platform for autism-related information.
      </p>
      <p>
        Admittedly, coming up with the application was no easy feat. The central
        goal of Team A’s idea is a challenge in itself. With the limited
        knowledge that Team A has regarding the autism community, it was
        challenging for the team to come up with a platform that truly supports
        parents to enhance the learning experience of children with autism.
        Nevertheless, the team has been actively sourcing for partnerships in
        the hopes that the organisations can guide Team A in its journey to
        create an effective application to engage children with autism.
        Currently, Team A has form a partnership with Nurture Pods and we would
        like to thank Nurture Pods for this opportunity, in addition to their
        continuous insights in support of our cause to contribute to this
        community in Singapore.
      </p>
      <p>
        If you would like to take a look at how the application works, you may
        click{" "}
        <a
          className="btn btn-inline"
          href="https://auturec.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to see what the team has put together, or take a look at the file we
        have attached.
      </p>
      <p>
        So what’s in store from the other 2 teams – Team B and C? You can find
        out more in our upcoming posts!
      </p>
    </React.Fragment>
  );
};

export default TeamAArticleContent;
