<?php

namespace App\Controller;

use App\Entity\Chart;
use App\Form\ChartType;
use App\Repository\ChartRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;

/**
 * @Route("/chart")
 */
class ChartController extends AbstractController
{
    /**
     * @Route("/", name="chart_index", methods={"GET"})
     */
    public function index(ChartRepository $chartRepository): Response
    {
        $labels = [];
        $datasets = []; 
        $chartBuilder = [];
        $repo = $chartRepository->findAll();
        foreach($repo as $data){
            $labels[] = $data->getDate()->format('d-m-Y');
            $datasets[] = $data->getNumber();
        }
        $chart = $chartBuilder->createChart(Chart::TYPE_BUBBLE);
        $chart->setData([
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'My First dataset',
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => $datasets,

                ]
            ],
        ]);
        return $this->render('chart/index.html.twig', [
            'charts' => $chartRepository->findAll(),
            'chart' => $chart,
        ]);
    }

    /**
     * @Route("/new", name="chart_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $chart = new Chart();
        $form = $this->createForm(ChartType::class, $chart);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($chart);
            $entityManager->flush();

            return $this->redirectToRoute('chart_index');
        }

        return $this->render('chart/new.html.twig', [
            'chart' => $chart,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="chart_show", methods={"GET"})
     */
    public function show(Chart $chart): Response
    {
        return $this->render('chart/show.html.twig', [
            'chart' => $chart,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="chart_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Chart $chart): Response
    {
        $form = $this->createForm(ChartType::class, $chart);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('chart_index');
        }

        return $this->render('chart/edit.html.twig', [
            'chart' => $chart,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="chart_delete", methods={"POST"})
     */
    public function delete(Request $request, Chart $chart): Response
    {
        if ($this->isCsrfTokenValid('delete'.$chart->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($chart);
            $entityManager->flush();
        }

        return $this->redirectToRoute('chart_index');
    }
}
