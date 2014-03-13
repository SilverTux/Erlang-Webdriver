%% -*- Mode: latex -*-
%%  -vlp 95-5-25.
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{msc-style}
              [1995/09/04 v1.4 by Vasco Lopes Paulo, vlp@inesc.pt
               2003/06/03 by Manuel João da Fonseca, mjf@inesc.pt
           2004/08/02 by Alfredo Ferreira, afj@inesc-id.pt]
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{report}}
% Always indent...
\DeclareOption{indent}
{
  \let\@afterindentfalse\@afterindenttrue
  \@afterindenttrue
}
\ExecuteOptions{indent}
\ProcessOptions

\LoadClass[12pt,a4paper]{report}

\renewenvironment{abstract}{%
  \chapter*{Abstract}%
  \addcontentsline{toc}{chapter}{Abstract}
}{}

\font\ch@pnumfont=cminch at 15mm
\font\ch@pnamfont=pplb at 8mm

\def\@makechapterhead#1{
{
    \hfill
    \ifnum \c@secnumdepth >\m@ne
      \ch@pnumfont\thechapter
        \par
        \nobreak
        \vskip 0pt
    \fi
    \hfill\begin{minipage}{8cm}
        \begin{flushright}
            \hrule
        \end{flushright}
    \end{minipage} \\
    \hbox to\textwidth
    {
      \hfill
        \ch@pnamfont
        \begin{minipage}{0.9\textwidth}
            \begin{flushright}
            \baselineskip=30pt
            #1
            \end{flushright}
        \end{minipage}
    }
    \par
    \nobreak
    \vskip 40pt
}}

\newbox\@nv@s@bl@
\setbox\@nv@s@bl@=\hbox{\ch@pnumfont A}

\def\@makeschapterhead#1{
{
    \hfill
    \vbox to\ht\@nv@s@bl@{}
    \par
    \nobreak
    \vskip 0pt
    \hbox to\textwidth
    {
        \hfill
        \ch@pnamfont
        \begin{minipage}{0.9\textwidth}
            \begin{flushright}
            \baselineskip=30pt
            #1
            \end{flushright}
        \end{minipage}
    }
    \par
    \nobreak
    \vskip 40pt
}}

\def\@part[#1]#2{%
    \ifnum \c@secnumdepth >-2\relax
      \refstepcounter{part}%
      \addcontentsline{toc}{part}{\thepart\hspace{1em}#1}%
    \else
      \addcontentsline{toc}{part}{#1}%
    \fi
    \markboth{}{}%
    {\centering
     \interlinepenalty \@M
     \normalfont
     \ifnum \c@secnumdepth >-2\relax
       \huge\bfseries \partname\nobreakspace\thepart
       \par
       \vskip 40\p@
     \fi
     \Huge \bfseries #2\par}%
    \@endpart}
\def\@spart#1{%
    {\centering
     \interlinepenalty \@M
     \normalfont
     \Huge \bfseries #1\par}%
    \@endpart}
\def\@endpart{\vfil\newpage
              \if@twoside
               \if@openright
                \null
                \thispagestyle{empty}%
                \newpage
               \fi
              \fi
              \if@tempswa
                \twocolumn
              \fi}
